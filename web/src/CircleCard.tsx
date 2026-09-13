import type { CSSProperties, JSX } from 'react';

export interface CircleCardProps {
  radius: number;
}

const cardStyle: CSSProperties = {
  border: '1px solid currentColor',
  borderRadius: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  padding: '1rem',
};

/**
 * Displays a circle's radius and calculated area.
 *
 * @param props The circle radius to display.
 * @returns A card containing the circle's radius and area, or null for an invalid radius.
 *
 * @example
 * <CircleCard radius={5} />
 */
export function CircleCard({ radius }: CircleCardProps): JSX.Element | null {
  if (!Number.isFinite(radius) || radius < 0) {
    return null;
  }

  const area = Math.PI * radius ** 2;

  return (
    <article aria-label="Circle details" style={cardStyle}>
      <h2>Circle</h2>
      <div>
        <strong>Radius:</strong> {radius}
      </div>
      <div>
        <strong>Area:</strong> {area}
      </div>
    </article>
  );
}

export default CircleCard;
