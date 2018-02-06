export {Rotation};

class Rotation {

    public static getMatrix(degree : number): number[][] {

        let degreeRD : number = degree*(Math.PI/180);
        
        let rotationMatrix: number[][]  =   [[Math.cos(degreeRD), Math.sin(degreeRD)],
                                             [-Math.sin(degreeRD), Math.cos(degreeRD)]];
        return rotationMatrix;
    }
}