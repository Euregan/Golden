import styles from "./Circle.module.css";

interface Props {
  text: string;
}

const circle = (center: { x: number; y: number }, radius: number) =>
  [
    `M ${center.x}, ${center.y - radius}`,
    `a ${radius},${radius} 0 1,0 0,${radius * 2}`,
    `a ${radius},${radius} 0 1,0 0,-${radius * 2}`,
  ].join(" ");

const Circle = ({ text }: Props) => (
  <svg className={styles.circle} viewBox="0 0 100 100">
    <defs>
      <linearGradient id="gold" gradientTransform="rotate(45)">
        <stop offset="20%" stop-color="#fcef7a" />
        <stop offset="60%" stop-color="#f0b81b" />
        <stop offset="100%" stop-color="#dd9716" />
      </linearGradient>
      <path d={circle({ x: 50, y: 50 }, 42.5)} id="text-circle" />
      <clipPath id="text-mask">
        <text fill="url(#gold)" fontSize="8" textAnchor="middle">
          <textPath href="#text-circle" startOffset="50%">
            {text}
          </textPath>
        </text>
      </clipPath>
    </defs>
    <circle
      cx="50"
      cy="50"
      r="49.5"
      fill="transparent"
      stroke-width="1"
      stroke="url(#gold)"
    />
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="transparent"
      stroke-width="1"
      stroke="url(#gold)"
    />
    <circle
      cx="50"
      cy="50"
      r="35"
      fill="transparent"
      stroke-width="1"
      stroke="url(#gold)"
    />
    <text fill="url(#gold)" fontSize="8" textAnchor="middle">
      <textPath href="#text-circle" startOffset="50%">
        {text}
      </textPath>
    </text>
    <path
      clip-path="url(#text-mask)"
      d={circle({ x: 50, y: 50 }, 40)}
      fill="transparent"
      stroke-width="1"
      stroke="url(#gold)"
    />
  </svg>
);

export default Circle;
