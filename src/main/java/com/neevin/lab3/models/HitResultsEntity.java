package com.neevin.lab3.models;

import javax.persistence.*;
import java.sql.Time;
import java.util.Objects;

@Entity
@Table(name = "hitresults")
public class HitResultsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private float x, y, r;

    private boolean hit;

    @Column(name = "creationtime")
    private Time creationTime;

    @Column(name = "querytime")
    private int queryTime;

    public HitResultsEntity(float x, float y, float r, boolean hit, Time creationTime, int queryTime) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.hit = hit;
        this.creationTime = creationTime;
        this.queryTime = queryTime;
    }

    public HitResultsEntity() { }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public float getX() {
        return x;
    }

    public void setX(float x) {
        this.x = x;
    }

    public float getY() {
        return y;
    }

    public void setY(float y) {
        this.y = y;
    }

    public float getR() {
        return r;
    }

    public void setR(float r) {
        this.r = r;
    }

    public boolean isHit() {
        return hit;
    }

    public void setHit(boolean hit) {
        this.hit = hit;
    }

    public Time getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Time creationTime) {
        this.creationTime = creationTime;
    }

    public int getQueryTime() {
        return queryTime;
    }

    public void setQueryTime(int queryTime) {
        this.queryTime = queryTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HitResultsEntity that = (HitResultsEntity) o;
        return id == that.id && Float.compare(that.x, x) == 0 && Float.compare(that.y, y) == 0
                && Float.compare(that.r, r) == 0 && hit == that.hit && queryTime == that.queryTime
                && Objects.equals(creationTime, that.creationTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, x, y, r, hit, creationTime, queryTime);
    }
}