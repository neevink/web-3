package com.neevin.lab3.models;

import java.io.Serializable;

public class HitResultModel implements Serializable {
    final float x, y, r;
    final boolean hit;
    final String creationTime;
    int queryTime;

    public HitResultModel(float x, float y, float r, boolean hit, String creationTime, int queryTime){
        this.x = x;
        this.y = y;
        this.r = r;
        this.hit = hit;
        this.creationTime = creationTime;
        this.queryTime = queryTime;
    }

    public float getX(){
        return this.x;
    }

    public float getY(){
        return this.y;
    }

    public float getR() {
        return this.r;
    }

    public boolean getHit(){
        return this.hit;
    }

    public String getCreationTime(){
        return this.creationTime;
    }

    public int getQueryTime(){
        return this.queryTime;
    }
}
