package com.neevin.lab3.beans;

import com.neevin.lab3.helpers.HitChecker;
import com.neevin.lab3.models.HitResultModel;
import com.neevin.lab3.models.HitResultsEntity;
import com.neevin.lab3.services.HitResultsService;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.io.Serializable;
import java.sql.Time;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@ManagedBean(name = "indexBean")
@SessionScoped
/*
@RequestScoped - бин используется на уравне одного запроса
@SessionScoped - бин сохраняется между запросами
@ApplicationScoped - бин сохраняет данные в контексте всего приложения, все видят одни и те же данные
 */
public class IndexBean implements Serializable {
    // Массив для отображения
    private List<HitResultModel> points = new ArrayList<HitResultModel>();
    // Сервис для отображения
    HitResultsService hitResultsService = new HitResultsService();

    protected float x = -5, y = -3, r = 1;

    public IndexBean(){

        List<HitResultsEntity> dbEntities = null;
        try{
            dbEntities = hitResultsService.findAllHitResults();
        }
        catch (Exception exc){}
        if(dbEntities == null){
            // Если к бд нет подключения, то ничего не отрисовываем
            System.out.println("Ошибка подключения к БД!");
            return;
        }
        
        for(HitResultsEntity e : dbEntities){
            HitResultModel newPoint = new HitResultModel(
                    e.getX(),
                    e.getY(),
                    e.getR(),
                    e.isHit());
            points.add(newPoint);
        }
        HitResultsEntity res = new HitResultsEntity(-1,-1, -1, false, new Time(0), 100);

        hitResultsService.saveHitResult(res);

        hitResultsService.updateHitResults(res);
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
        Date start = new Date();
        System.out.println(String.format("x=%f, y=%f, r=%f", x, y, r));
        Time time = new Time((new Date()).getTime());
        HitResultsEntity res = new HitResultsEntity(x,y, r, HitChecker.checkHit(x, y, r), time, 100);
        hitResultsService.saveHitResult(res);
        hitResultsService.updateHitResults(res);

        // TODO Валидацию прикрути
        HitResultModel pointEntry = new HitResultModel(x, y, r, HitChecker.checkHit(x, y, r));
        points.add(0, pointEntry);
    }
}
