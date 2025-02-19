import { ICustomEvent } from '../../../interfaces/event'
import { AbstractMouseEvent } from './AbstractMouseEvent'

export class MouseMoveEvent
  extends AbstractMouseEvent
  implements ICustomEvent
{
  type = 'mouse:move'
}
