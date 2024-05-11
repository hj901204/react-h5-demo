import { FC } from 'react';
import Tabbar from '@/components/tabbar';
import styles from './index.module.less';
import { observer } from 'mobx-react-lite';
import Layout from '@/components/layout';

const My: FC = () => {
    return <Layout title='我的'>
        <div className={styles.my}>
            <span className={styles.title}>React 我的页面</span>
            <Tabbar />
        </div>
    </Layout>;


};

export default observer(My);