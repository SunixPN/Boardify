export const mainSideEffect = () => {
    const main = document.querySelector("main[data-main='true']") as HTMLDivElement
    const toolBar = document.querySelector("aside[data-toolbar='true']") as HTMLDivElement

    const resizeObserver = new ResizeObserver(() => {
        const height = Math.max(
            (main.scrollHeight + 100),
            window.innerHeight
        )
        toolBar.style.height = `${height}px`
    })

    resizeObserver.observe(main)

    return () => resizeObserver.unobserve(main)
}