import {Sensor} from "../rwth.visualisation/car/Sensor";
import {Car} from "../rwth.visualisation/car/Car";
import {Orientation} from "../rwth.visualisation/coord/Orientation";
import {WallLinear} from "../rwth.visualisation/track/WallLinear";
import * as math from "../libs/math.js";

describe('The sensors test', () => {

    let car = new Car(0,0);

    it('should return FRONT_LEFT', () => {

        let sensor = car.getSensor(Orientation.FRONT_LEFT);
        
        expect(sensor.getDirection(car)).toEqual([1,0]);
    });

    it('should return FRONT_LEFT_SIDE', () => {

        let sensor = car.getSensor(Orientation.FRONT_LEFT_SIDE);
        
        expect(sensor.getDirection(car)).toEqual([0,1]);
    });

    it('should return BACK_LEFT', () => {

        let sensor = car.getSensor(Orientation.BACK_LEFT);
        
        expect(sensor.getDirection(car)).toEqual([-1,0]);
    });

    it('should return BACK_LEFT_SIDE', () => {

        let sensor = car.getSensor(Orientation.BACK_LEFT_SIDE);
        
        expect(sensor.getDirection(car)).toEqual([0,1]);
    });

    it('should return GET POSITION', () => {

        let sensor = car.getSensor(Orientation.BACK_LEFT_SIDE);
        let position = math.matrix([-4.15, 1.85]);
        
        expect(sensor.getPosition(car)).toEqual(position);
    });


    // it('should return GET POSITION', () => {

    //     let car2 = new Car(60,0);
    //     car2.setDegree(60);
    //     let sensor = car2.getSensor(Orientation.FRONT_LEFT_SIDE);
    //     let wall = new WallLinear([-120, -20], [122, -20])
        
    //     expect(sensor.getIntersections(wall, car2)).toEqual([[0,0],[0,0]]);
    // });

});