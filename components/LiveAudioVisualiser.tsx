import React, { useEffect, useRef } from 'react';

declare global {
    interface Window { webkitAudioContext: typeof AudioContext }
}

const LiveAudioVisualiser: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
            .then(stream => {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const analyser = audioContext.createAnalyser();
                const source = audioContext.createMediaStreamSource(stream);
                source.connect(analyser);
                draw(analyser);
            });
    }, []);

    const draw = (analyser: AnalyserNode) => {
        const canvas = canvasRef.current;
        if (canvas === null) return;
        const ctx = canvas.getContext('2d');
        if (ctx === null) return;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const renderFrame = () => {
            requestAnimationFrame(renderFrame);
            analyser.getByteFrequencyData(dataArray);
            ctx.fillStyle = 'var(--foreground-rgb)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            const barWidth = (canvas.width / bufferLength) * 2.5;
            let x = 0;

            for(let i = 0; i < bufferLength; i++) {
                const barHeight = dataArray[i];
                ctx.fillStyle = `rgb(${barHeight+100},50,50)`;
                ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
                x += barWidth + 1;
            }
        }

        renderFrame();
    }

    return (
        <div>
            <canvas ref={canvasRef} />
        </div>
    );
}

export default LiveAudioVisualiser;