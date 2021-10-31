package com.neevin.lab3.beans;

import com.neevin.lab3.helpers.HitChecker;
import com.neevin.lab3.models.HitResultModel;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@ManagedBean(name = "indexBean")
@ApplicationScoped
/*
@RequestScoped - бин используется на уравне одного запроса
@SessionScoped - бин сохраняется между запросами
@ApplicationScoped - бин сохраняет данные в контексте всего приложения, все видят одни и те же данные
 */
public class IndexBean implements Serializable {
    private List<HitResultModel> points = new ArrayList<HitResultModel>();

    protected float x = -5, y = -3, r = 1;

    public IndexBean(){
        // points.add(new HitResultModel(1, 2, 3, true));
        // points.add(new HitResultModel(0, 1, 1, false));
    }

    public float getX(){
        return this.x;
    }

    public void setX(float x){
        this.x = x;
    }

    public float getY(){
        return this.y;
    }

    public void setY(float y){
        this.y = y;
    }

    public float getR(){
        return this.r;
    }

    public void setR(float r){
        this.r = r;
    }

    public List<HitResultModel> getPoints() {
        return points;
    }

    public void setPoints(List<HitResultModel> points) {
        this.points = points;
    }


    public void submitCoordinates(){
        System.out.println(String.format("x=%f, y=%f, r=%f", x, y, r));
        // TODO Валидацию прикрути
        HitResultModel pointEntry = new HitResultModel(x, y, r, HitChecker.checkHit(x, y, r));
        points.add(0, pointEntry);
    }
}
