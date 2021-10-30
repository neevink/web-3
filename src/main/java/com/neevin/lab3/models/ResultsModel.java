package com.neevin.lab3.models;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ResultsModel {
    protected ArrayList<HitResultModel> results = new ArrayList<HitResultModel>();
    protected Date currentTime = new Date();
    // Время выполнения скрипта в мс.
    protected int workTime;

    public ResultsModel(){}

    public void addHit(HitResultModel hit){
        results.add(hit);
    }

    public List<HitResultModel> getHits(){
        return this.results;
    }

    public String getCurrentTime() {
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        return formatter.format(currentTime);
    }

    public int getWorkTime(){
        return this.workTime;
    }

    public void setWorkTime(int workTime) {
        this.workTime = workTime;
    }
}
