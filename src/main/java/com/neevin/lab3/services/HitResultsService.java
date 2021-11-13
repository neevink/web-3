package com.neevin.lab3.services;

import com.neevin.lab3.dao.HitResultsDao;
import com.neevin.lab3.models.HitResultsEntity;

import java.util.List;

public class HitResultsService {
    private HitResultsDao hitResultsDao = new HitResultsDao();

    public HitResultsService(){}

    public HitResultsEntity findResult(int id){
        return hitResultsDao.findById(id);
    }

    public void saveHitResult(HitResultsEntity res) {
        hitResultsDao.save(res);
    }

    public void deleteHitResult(HitResultsEntity res) {
        hitResultsDao.delete(res);
    }

    public void updateHitResults(HitResultsEntity res) {
        hitResultsDao.update(res);
    }

    public List<HitResultsEntity> findAllHitResults(){
        return hitResultsDao.findAll();
    }
}
