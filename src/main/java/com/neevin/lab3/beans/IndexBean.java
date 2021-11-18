package com.neevin.lab3.beans;

import com.neevin.lab3.helpers.HitChecker;
import com.neevin.lab3.helpers.HitValidator;
import com.neevin.lab3.models.HitResultModel;
import com.neevin.lab3.models.HitResultsEntity;
import com.neevin.lab3.services.HitResultsService;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
        
        for(int i = dbEntities.size() - 1; i >= 0; i--){
            HitResultsEntity e = dbEntities.get(i);
            String date = new SimpleDateFormat("yyyy.MM.dd HH:mm:ss").format(e.getCreationTime());
            HitResultModel newPoint = new HitResultModel(
                    e.getX(),
                    e.getY(),
                    e.getR(),
                    e.isHit(),
                    date,
                    e.getQueryTime()
                    );
            points.add(newPoint);
        }
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
        if(!(HitValidator.validateR(r) && HitValidator.validateX(x) && HitValidator.validateY(y))){
            return;
        }
        Date start = new Date();
        System.out.println(String.format("x=%f, y=%f, r=%f", x, y, r));

        HitResultsEntity res = new HitResultsEntity(x,y, r, HitChecker.checkHit(x, y, r), start, 0);

        hitResultsService.saveHitResult(res);
        hitResultsService.updateHitResults(res);

        int qTime = (int)(new Date().getTime() - start.getTime());
        res.setQueryTime(qTime);
        hitResultsService.updateHitResults(res); // Мы короче после первого запроса обновляем инфу по этому запросу

        String date = new SimpleDateFormat("yyyy.MM.dd HH:mm:ss").format(start);
        HitResultModel pointEntry = new HitResultModel(x, y, r, HitChecker.checkHit(x, y, r), date, qTime);
        points.add(0, pointEntry);
    }
}
