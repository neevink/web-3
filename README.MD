# Третья лаботаторная по WEB-программированию

Неевин Кирилл P3213, вариант #6219

## Задание

![1 картинка задания](task/task1.png "1 картинка задания")
![2 картинка задания](task/task2.png "2 картинка задания")

Подключиться на гелиос по ssh:
```shell
ssh s313087@helios.se.ifmo.ru -p 2222
```

Скопировать лабу на гелиос:
```shell
scp -r -P 2222 src /home/kirill/itmo/web/lab3-try-1/out/artifacts/lab3_war/lab3_war.war s313087@helios.se.ifmo.ru:/home/s313087/web/lab3/wildfly-25/standalone/deployments/
```
-r = рекурсивно, -P = порт, src - директория с исходным кодом (обязательно без слеша в конце),
директория назначения на удалённой машине должна быть со слешем на конце.
<br/>

Прокинуть порт:

```shell
ssh -L 8098:localhost:8098 s313087@helios.se.ifmo.ru -p 2222
```

Сайт доступен по адресу: `http://localhost:8098/lab3_war/`
