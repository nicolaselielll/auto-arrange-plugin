import { PortData, Preset } from '../types'

/**
 * Classic preset. Input ports are positioned on the left bottom side of the node, output ports are positioned on the right top side of the node.
 * @priority 7
 */
export const setup = (props?: { spacing?: number, top?: number, bottom?: number, x?: number }): Preset => {
  return () => ({
    port(data): PortData {
      const { spacing, top, bottom } = {
        spacing: typeof props?.spacing !== 'undefined'
          ? props.spacing
          : 35,
        top: typeof props?.top !== 'undefined'
          ? props.top
          : 35,
        bottom: typeof props?.bottom !== 'undefined'
          ? props.bottom
          : 15
      }

      if (data.side === 'output') {
        return {
          x: props.x,
          y: top + data.index * spacing,
          width: 15,
          height: 15,
          side: 'EAST'
        }
      }
      return {
        x: -props.x,
        y: data.height - bottom - data.ports * spacing + data.index * spacing,
        width: 15,
        height: 15,
        side: 'WEST'
      }
    }
  })
}
