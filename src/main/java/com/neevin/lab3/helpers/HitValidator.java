package com.neevin.lab3.helpers;

public class HitValidator {
    final static float MIN_X = -5, MAX_X = 3;
    final static float MIN_Y = -3, MAX_Y = 3;
    final static float MIN_R = 1, MAX_R = 5;

    public static boolean validateX(float x){
        return MIN_X <= x && x <= MAX_X;
    }

    public static boolean validateY(float y){
        return MIN_Y <= y && y <= MAX_Y;
    }

    public static boolean validateR(float r){
        return MIN_R <= r && r <= MAX_R;
    }
}
