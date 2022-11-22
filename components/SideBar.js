import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Link from 'next/link';
import styles from '../styles/adminCategory.module.css'

export default function SideBar(category) {

  // Эти категории будут подтягиваться с бэка
  const categoryList = [
    {
      name: 'questions',
      text: 'Вопросы'
    },
    {
      name: 'operators',
      text: 'Операторы'
    },
    {
      name: 'users',
      text: 'Пользователи'
    },
    {
      name: 'settings',
      text: 'Настройки'
    },
    {
      name: 'statistics',
      text: 'Статистика'
    },
  ]

  // Меняется только класс. Присвоить класс через дом дерево не вариант, т.к. его еще нет.
  // Эту конструкцию необходимо избавить от дублирования кода, есть идеи?:)
  const drawer = (
    <div>
      <List sx={{ width: '240px' }}>
        {categoryList.map((el) => (
          category.props == el.name ?
            (<Link href={`/admin/${el.name}`} key={el.name}><a> <li className={styles.itemListCurrent}>
              <div className={styles.sideBar}>{el.text} </div>
            </li></a></Link>
            ) : (
              <Link href={`/admin/${el.name}`} key={el.name}><a> <li className={styles.itemList}>
                <div className={styles.sideBar}>{el.text} </div>
              </li></a></Link>
            )
        ))}
      </List>
    </div>
  );


  return (
    <div sx={{ display: 'flex' }}>
      <CssBaseline />
      <div> {drawer} </div>

    </div>
  );
}