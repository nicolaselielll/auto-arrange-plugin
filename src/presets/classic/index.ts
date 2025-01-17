import { PortData, Preset } from '../types'

export const setup = (props?: { spacing?: number, top?: number, bottom?: number, x?: number }): Preset => {
  return () => ({
    port(data): PortData {
      const { spacing, top, bottom, x } = {
        spacing: typeof props?.spacing !== 'undefined' ? props.spacing : 35,
        top: typeof props?.top !== 'undefined' ? props.top : 35,
        bottom: typeof props?.bottom !== 'undefined' ? props.bottom : 15,
        x: typeof props?.x !== 'undefined' ? props.x : 0 // Default value for x
      };
      console.log("Calculated port data:", {
        x: data.side === 'output' ? x : -x,
        y: data.side === 'output' ? top + data.index * spacing : data.height - bottom - data.ports * spacing + data.index * spacing
      });
      if (data.side === 'output') {
        return {
          x: x, // Use the destructured x directly
          y: top + data.index * spacing,
          width: 15,
          height: 15,
          side: 'EAST'
        };
      }
      return {
        x: -x, // Use the destructured x directly
        y: data.height - bottom - data.ports * spacing + data.index * spacing,
        width: 15,
        height: 15,
        side: 'WEST'
      };
    }
  });
};
