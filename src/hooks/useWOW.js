import { useLayoutEffect } from 'react'
import './useWOW.css'

// كل الأنيميشنات المتاحة
const ANIMATIONS = [
  'fadeIn',
  'fadeInUp',
  'fadeInDown',
  'fadeInLeft',
  'fadeInRight',
  'zoomIn',
  'bounceIn',
  'slideInLeft',
  'slideInRight',
  'flipInX',
  'flipInY',
  'pulse',
]

function revealElement(el) {
  // لو اتكشف قبل كده متعملش حاجة تاني
  if (el.dataset.wowState === 'done') {
    return
  }

  el.dataset.wowState = 'done'

  const animation = ANIMATIONS.find((name) =>
    el.classList.contains(name)
  )

  const delay = el.getAttribute('data-wow-delay')
  const duration = el.getAttribute('data-wow-duration')

  if (delay) {
    el.style.animationDelay = delay
  }

  if (duration) {
    el.style.animationDuration = duration
  }

  el.style.visibility = 'visible'

  if (animation) {
    const animClass = 'wow-anim-' + animation

    el.classList.add(animClass)

    // بعد ما الأنيميشن يخلص نشيل الكلاسات
    // عشان الـ hover يشتغل من غير تعارض
    const onEnd = (event) => {
      if (event.target !== el) {
        return
      }

      el.classList.remove(animClass)
      el.style.animationDelay = ''
      el.style.animationDuration = ''
      el.removeEventListener('animationend', onEnd)
    }

    el.addEventListener('animationend', onEnd)
  }
}

function useWOW() {
  useLayoutEffect(() => {
    // متصفحات قديمة جداً — نعرض العناصر عادي من غير أنيميشن
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.wow').forEach((el) => {
        el.style.visibility = 'visible'
      })

      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealElement(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    const scan = () => {
      document.querySelectorAll('.wow').forEach((el) => {
        if (el.dataset.wowState === 'done') {
          return
        }

        el.style.visibility = 'hidden'
        observer.observe(el)
      })
    }

    // أول فحص — يمسك كل العناصر الموجودة
    scan()

    // ✅ الجديد: بيرصد أي عناصر .wow تترندر بعدين
    // (بيحل مشاكل التنقل بين الصفحات والرندر المتأخر)
    let scheduled = false

    const mutation = new MutationObserver(() => {
      if (scheduled) {
        return
      }

      scheduled = true

      requestAnimationFrame(() => {
        scheduled = false
        scan()
      })
    })

    mutation.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
  }, [])
}

export default useWOW