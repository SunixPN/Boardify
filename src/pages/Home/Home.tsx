import { useRef } from "react"

const Home = () => {
    const ref = useRef<HTMLDivElement>(null)
    const dropRef = useRef<HTMLDivElement>(null)

    const isIntersecting = (dragRect: DOMRect, dropRect: DOMRect) => {
        const intersectionWidth = Math.max(
            0,
            Math.min(dragRect.right, dropRect.right) - Math.max(dragRect.left, dropRect.left)
        );
        const intersectionHeight = Math.max(
            0,
            Math.min(dragRect.bottom, dropRect.bottom) - Math.max(dragRect.top, dropRect.top)
        );
        const intersectionArea = intersectionWidth * intersectionHeight;
    
        const dragArea = dragRect.width * dragRect.height;
        const dropArea = dropRect.width * dropRect.height;
    
        // Считаем, что элемент "входит", если пересекаемая площадь больше половины меньшего из двух элементов
        const thresholdArea = Math.min(dragArea, dropArea) / 2;
    
        return intersectionArea >= thresholdArea;
    };

    return (
        <>
            <div ref={ref} onMouseDown={(event) => {
                console.log(event)
                if (ref.current) {
                    const highiOrderFn = (clienX: number, clientY: number) => {
                        let isIntering = false
                        return (event: MouseEvent) => {
                            if (ref.current) {
                                ref.current.style.transform = `translate(${event.clientX - clienX}px, ${event.clientY - clientY}px)`

                                if (dropRef.current) {
                                    const dragRect = ref.current.getBoundingClientRect();
                                    const dropRect = dropRef.current.getBoundingClientRect();
                                    if (isIntersecting(dragRect, dropRect)) {
                                        const initCoord = dragRect.y - (event.clientY - clientY)
                                        console.log(initCoord, dropRect.y)
                                        dropRef.current.style.backgroundColor = "green";
                                        if (!isIntering) {
                                            dropRef.current.style.transform = `translateY(${initCoord - dropRect.y}px)`
                                            isIntering = true
                                        }
                                        // Подсветка
                                    } else {
                                        dropRef.current.style.backgroundColor = "black";
                                    }
                                }
                            }
                        }
                    }
                    window.onmousemove = highiOrderFn(event.clientX, event.clientY)
                    ref.current.onmouseup = () => {
                        if (ref.current) {
                            window.onmousemove = null
                            ref.current.style.transform = "translate(0, 0)"
                        }

                    }
                }
            }} style={{ width: 100, height: 100, backgroundColor: "black", position: "relative", zIndex: "20" }}></div>
            <div ref={dropRef} style={{ width: 100, height: 100, backgroundColor: "black", margin: "20px 0 0 0", transition: "0.3s" }}></div>
        </>

    )
}

export default Home