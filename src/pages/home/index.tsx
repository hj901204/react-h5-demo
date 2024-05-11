import { FC, useState} from 'react';
import ApiCollector from '@/const/apis';
import useMockRequest from '@/hooks/useMockRequest';
import styles from './index.module.less';
import Tabbar from '@/components/tabbar';
import HomeLoader from '@/components/skeleton/homeLoader';
import Layout from '@/components/layout';
import { List, SearchBar } from 'antd-mobile'

interface List {
    id: number;
    content: string;
    isRoute?: boolean;
}

interface Data {
    title: string;
    subTitle: string;
}

const Home: FC = () => {

   let { list, error, loading } = useMockRequest<Data>(ApiCollector.getHome, {});
   const [count,setCount] = useState(list)
   const [search,setSearch] = useState(false)
    if (loading) {
        return <div className={styles.loader}>
            <HomeLoader />
            <Tabbar />
        </div>;
    }
  
    const onSearch = (value: string) => {
        const results = list.filter(t => {
            for (let key in t) {
              if(t[key].toString().indexOf(value.toString())!=-1){
                return true
              }
            }
            
          }
        );
          setSearch(true)
          setCount(results)
          
    }
    const onClear = () => {
        setCount(list)
    }
   
    return <Layout title="首页" >
        <div className={styles.home}>
            <div className={styles.search}>
                <SearchBar placeholder='请输入查询内容' onSearch={onSearch} onClear={onClear}/>
            </div>
            <div>
            <List header='csvList'>
                
                {count.length>0?
                    count.map((v,k)=>(
                        <List.Item key={k} >
                            <div className={styles.list}>locationid:{v.locationid}</div>
                            <div className={styles.list}>Applicant:{v.Applicant}</div>
                            <div className={styles.list}>FacilityType:{v.FacilityType}</div>
                            <div className={styles.list}>cnn:{v.cnn}</div>
                            <div className={styles.list}>LocationDescription:{v.LocationDescription}</div>
                            <div className={styles.list}>Address:{v.Address}</div>
                            <div className={styles.list}>blocklot:{v.blocklot}</div>
                            <div className={styles.list}>block:{v.block}</div>
                            <div className={styles.list}>lot:{v.lot}</div>
                            <div className={styles.list}>permit:{v.permit}</div>
                            <div className={styles.list}>Status:{v.Status}</div>
                            <div className={styles.list}>FoodItems:{v.FoodItems}</div>
                            <div className={styles.list}>X:{v.X}</div>
                            <div className={styles.list}>Y:{v.Y}</div>
                            <div className={styles.list}>Latitude:{v.Latitude}</div>
                            <div className={styles.list}>Longitude:{v.Longitude}</div>
                            <div className={styles.list}>Schedule:{v.Schedule}</div>
                            <div className={styles.list}>dayshours:{v.dayshours}</div>
                            <div className={styles.list}>NOISent:{v.NOISent}</div>
                            <div className={styles.list}>Approved:{v.Approved}</div>
                            <div className={styles.list}>Received:{v.Received}</div>
                            <div className={styles.list}>PriorPermit:{v.PriorPermit}</div>
                            <div className={styles.list}>ExpirationDate:{v.ExpirationDate}</div>

                        </List.Item>
                    ))
                :search&&count.length===0?null:list.map((v,k)=>(
                    <List.Item key={k} >
                        <div className={styles.list}>locationid:{v.locationid}</div>
                        <div className={styles.list}>Applicant:{v.Applicant}</div>
                        <div className={styles.list}>FacilityType:{v.FacilityType}</div>
                        <div className={styles.list}>cnn:{v.cnn}</div>
                        <div className={styles.list}>LocationDescription:{v.LocationDescription}</div>
                        <div className={styles.list}>Address:{v.Address}</div>
                        <div className={styles.list}>blocklot:{v.blocklot}</div>
                        <div className={styles.list}>block:{v.block}</div>
                        <div className={styles.list}>lot:{v.lot}</div>
                        <div className={styles.list}>permit:{v.permit}</div>
                        <div className={styles.list}>Status:{v.Status}</div>
                        <div className={styles.list}>FoodItems:{v.FoodItems}</div>
                        <div className={styles.list}>X:{v.X}</div>
                        <div className={styles.list}>Y:{v.Y}</div>
                        <div className={styles.list}>Latitude:{v.Latitude}</div>
                        <div className={styles.list}>Longitude:{v.Longitude}</div>
                        <div className={styles.list}>Schedule:{v.Schedule}</div>
                        <div className={styles.list}>dayshours:{v.dayshours}</div>
                        <div className={styles.list}>NOISent:{v.NOISent}</div>
                        <div className={styles.list}>Approved:{v.Approved}</div>
                        <div className={styles.list}>Received:{v.Received}</div>
                        <div className={styles.list}>PriorPermit:{v.PriorPermit}</div>
                        <div className={styles.list}>ExpirationDate:{v.ExpirationDate}</div>

                    </List.Item>
                ))
                  
            }
            </List>
            </div>
                
            <Tabbar />
        </div>
    </Layout>;

};

export default Home;


