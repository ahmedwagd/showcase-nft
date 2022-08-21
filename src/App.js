import { Features, Download, SectionWrapper } from './components'
import styles from './styles/Global'
import { homeCards, homeHero, feature, mockup } from './assets'

const App = () => {
  return (
    <>
      <SectionWrapper
        title='You own store of Nifty NFTs. Start Selling & Growing'
        description='Buy, Store, Collect NFTs, Exchange & Earn crypto. Join 25+
        million people using ProNef Marketplace'
        showBtn
        mockupImg={homeHero}
        banner='banner'
      />
      <SectionWrapper
        title='Smart User Interface Marketplace'
        description='Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design'
        mockupImg={homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title='Deployment'
        description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={feature}
        reverse
      />
      <SectionWrapper
        title='Creative way to showcase the store'
        description='The app contains two screens. The first screen lists all NFTs while the second screen shows the details of a specific NFT.'
        mockupImg={mockup}
        banner='banner02'
      />
      <Download />
      <div className={`px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04`}>
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by {" "}
          <a href='https://ahmedwagdy.netlify.app/' target='_blank' rel="noreferrer" className='font-bold'>
            Ahmed Wagdy</a>
        </p>
      </div>
    </>
  );
}

export default App;
