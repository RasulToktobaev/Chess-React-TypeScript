import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../cell";
import blackLogo from "../../assets/black-knight.png";
import whiteLogo from "../../assets/white-knight.png";

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KNIGHT;
    }
    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false;
        const Dx = Math.abs(this.cell.x - target.x);
        const Dy = Math.abs(this.cell.y - target.y);

        return (Dx === 1 && Dy === 2) || (Dx === 2 && Dy === 1)
    }
}