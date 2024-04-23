import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../cell";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        const Dx = Math.abs(this.cell.x - target.x);
        const Dy = Math.abs(this.cell.y - target.y);

        if ((Dx <= 1 && Dy <= 1) || (Dx === 1 && Dy === 1)) {

            if (target.figure && target.figure.color === this.color) {
                return false;
            }
            return true;
        }
        return false
    }
}

