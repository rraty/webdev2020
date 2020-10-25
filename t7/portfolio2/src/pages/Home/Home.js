import { Card } from 'antd';
import styles from './Home.module.scss';

const { Meta } = Card;

const items = [
  {
    title: 'Tehtävä 1',
    description: 'Loremp aksdaskldjklasjdl',
    image: 'TODOO',
    liveUrl: '???',
    repositoryUrl: 'TODO GITHUb',
  },
  {
    title: 'Tehtävä 2',
    description: 'Loremp aksdaskldjklasjdl',
    image: 'TODOO',
    liveUrl: '???',
    repositoryUrl: 'TODO GITHUb',
  },
  {
    title: 'Tehtävä 3',
    description: 'Loremp aksdaskldjklasjdl',
    image: 'TODOO',
    liveUrl: '???',
    repositoryUrl: 'TODO GITHUb',
  },
];

const Home = () => {
  const t = '';

  return (
    <>
      <div>MENU</div>
      {t}
      <div className={styles.Header}>
        Showcase  Discover creative Work
      </div>
      <div className={styles.Projects}>
        {items.map((i) => (
          <Card
            hoverable
            style={{ width: 300 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            actions={[<p>Käytetyt teknologiat</p>]}
         >
            <Meta
              title={i?.title}
              description={(
                <div>
                  <p>{i?.description}</p>
                  <a href={i?.liveUrl}>Demo</a>
                </div>
          )}
            />
          </Card>
        ))}

      </div>
    </>
  );
};

export default Home;
