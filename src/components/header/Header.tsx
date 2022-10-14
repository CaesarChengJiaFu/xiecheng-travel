import React from "react";
import logo from './../../assets/images/logo.svg';
import styles from './Header.module.css';
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
// import { useSelctor } from 'react/hooks';// 使用TypeUseSelectorHook这个interface 来重新定义 useSelector这个hook
// import { RootState } from "../../redux/store";
import { useSelector } from '../../redux/hooks';
import { addLanguageActionCreator, changeLanguageActionCreator } from "../../redux/language/languageActions";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const { t } = useTranslation()
  const language = useSelector(state => state.languageReducer.language );
  const languageList = useSelector(state => state.languageReducer.languageList );
  const dispatch = useDispatch();

  // const language = useSelector<RootState>(state => state.language)
  /* 使用useSelctor这个hook来获取store中的数据，其中一个目的就是解决组件与store数据耦合问题。 如果每次在组	 件中使用useSelector都要传入RootState类型，就讲store与组件深度绑定，就将导致组件不能复用
  => 所以，需要使用 TypeUseSelectorHook 这个interface，来讲RootStore 这个类型剥离开
  */

  const menuClickHandler = (e) => {
    if (e.key === "new") {
      dispatch(addLanguageActionCreator("新语言", "new_lang"))
    } else {
      dispatch(changeLanguageActionCreator(e.key))
    }
  };

  return (
    <div className={styles['app-header']}>
      <div className={styles['top-header']}>
        <div className={styles.inner}>
          <Typography.Text>{t("header.slogan")}</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu
                onClick={menuClickHandler}
                items={[
                  ...languageList.map((l) => {
                    return { key: l.code, label: l.name };
                  }),
                  { key: "new", label: t("header.add_new_language") },
                ]}
              />
            }
            icon={<GlobalOutlined />}
          >
            {language === "zh" ? "中文" : "English"}
          </Dropdown.Button>
          <Button.Group className={styles['button-group']}>
            <Button onClick={() => navigate('/register')}>{t("header.register")}</Button>
            <Button onClick={() => navigate('/signIn')}>{t("header.signin")}</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
        <span onClick={() => navigate('/')}>
          <img src={logo} alt="logo" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles.title}>{t("header.title")}</Typography.Title>
        </span>
        <Input.Search
          placeholder="请输入旅游目的地、主题、或关键字"
          onSearch={(keyword: string) => navigate('/search/' + keyword)}
          className={styles['search-input']}>
        </Input.Search>
      </Layout.Header>
      <Menu mode={"horizontal"} className={styles['main-menu']}
        items={[
          { key: "1", label: t("header.home_page") },
          { key: "2", label: t("header.weekend") },
          { key: "3", label: t("header.group") },
          { key: "4", label: t("header.backpack") },
          { key: "5", label: t("header.private") },
          { key: "6", label: t("header.cruise") },
          { key: "7", label: t("header.hotel") },
          { key: "8", label: t("header.local") },
          { key: "9", label: t("header.theme") },
          { key: "10", label: t("header.custom") },
          { key: "11", label: t("header.study") },
          { key: "12", label: t("header.visa") },
          { key: "13", label: t("header.enterprise") },
          { key: "14", label: t("header.high_end") },
          { key: "15", label: t("header.outdoor") },
          { key: "16", label: t("header.insurance") },
        ]}>
      </Menu>
    </div>
  )
}