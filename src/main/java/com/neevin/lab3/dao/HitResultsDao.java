package com.neevin.lab3.dao;

import com.neevin.lab3.models.HitResultsEntity;
import com.neevin.lab3.utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.List;

public class HitResultsDao {

    public HitResultsEntity findById(int id) {
        return HibernateSessionFactoryUtil
                .getSessionFactory()
                .openSession()
                .get(HitResultsEntity.class, id);
    }

    public List<HitResultsEntity> findAll() {
        List<HitResultsEntity> res = (List<HitResultsEntity>) HibernateSessionFactoryUtil
                .getSessionFactory()
                .openSession()
                .createQuery("From HitResultsEntity")
                .list();
        return res;
    }

    public void save(HitResultsEntity hitResults) {
        Session session = HibernateSessionFactoryUtil
                .getSessionFactory()
                .openSession();
        Transaction tx1 = session.beginTransaction();
        session.save(hitResults);
        tx1.commit();
        session.close();
    }

    public void update(HitResultsEntity hitResults) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.update(hitResults);
        tx1.commit();
        session.close();
    }

    public void delete(HitResultsEntity hitResults) {
        Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
        Transaction tx1 = session.beginTransaction();
        session.delete(hitResults);
        tx1.commit();
        session.close();
    }
}
