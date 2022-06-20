import React from "react";
import {
  Button,
  Container,
  Grid,
  Loading,
  Spacer,
  Text,
  Image
} from "@nextui-org/react";
import "./App.css";
import Profile from "./component/Profile/Profile";
import Review from "./component/Review/Review";
import Navbar from "./component/Navbar/Navbar";
import Contact from "./component/Contact/Contact";
import Location from "./component/Location/Location";
import seer from './images/seer.png'
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

export default function App() {
  return (
    <div>
      <Navbar />

      <MouseParallaxContainer>
      <MouseParallaxChild factorX={0.03} factorY={0.05}>
      <div className='title'>

   
<div >
              <Text
                h1
                size="20vh"
                css={{
                  textGradient: "45deg, $purple600 -20%, $pink600 100%",
                }}
                weight="bold"
                className="ink"
              >
                หมอหมึก
              </Text>
              <Text h4 style={{ lineHeight: "2px" }}>
                ผู้มีประสบการณ์พยากรณ์กว่า 10 ปี พร้อมคำพยากรณ์ที่แม่นยำ
              </Text>
              <Spacer y={2} />
              
                <div className="queue">
                  <Button
                    auto
                    color="warning"
                    size="lg"
                    css={{ px: "$40" }}
                    style={{background:"#fff", color:'#181920',borderRadius:"50px"}}
                  >
                    จองคิว
                  </Button>
                </div>
                </div>
                </div>
              
      </MouseParallaxChild>
      </MouseParallaxContainer>
    <Container fluid css={{ mw: '1300px'}}>

      <Grid.Container gap={2}>
        <Grid xs={0} md={6} sm={6} lg={6}>
          <Spacer x={6} />
          <Profile />
        </Grid>
        <Grid xs={12} md={6} sm={6} lg={6}>
        <Image
          src={seer}
          alt="Default Image"
          autoResize="true"
          width={500}
        />
        </Grid>
        <Grid xs={12} md={0} sm={0} lg={0}>
          <Profile />
        </Grid>
      </Grid.Container>

      <Spacer y={8} />

      <Text h1 style={{ textAlign: "center"}}>
        รีวิวจากลูกค้า
      </Text>

      <Spacer y={1} />

      <Grid.Container gap={2}>
        <Grid lg={4} md={4} sm={4} justify="center">
          <Review
            name="แมทธิว"
            role="นักธุรกิจ"
            desc="หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจได้มากเลย ตอนนี้ขายดีเทน้ำเทท่าเลยครับ"
          />
        </Grid>
        <Grid lg={4} md={4} sm={4} justify="center">
          <Review
            name="แจ๊ค"
            role="นักแสดง"
            desc="ต้องขอบคุณหมอหมึกในการช่วยให้ความสัมพันธ์ราบรื่นด้วยนะคะ ทำนายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ"
          />
        </Grid>
        <Grid lg={4} md={4} sm={4} justify="center">
          <Review
            name="น้ำใส"
            role="นักศึกษา"
            desc="ที่หมอหมึกบอกมานะคะ เกิดเกือบหมดเลยค่ะ ถ้าไม่ได้หมอหมึกช่วยไว้ ชีวิตคงแย่เลยค่ะ ดีนะที่ป้องกันเรื่องร้าย ๆ ทันเวลา"
          />
        </Grid>
      </Grid.Container>
      <Spacer y={3} />

      <Grid.Container gap={4}>
        <Grid lg={7} md={6} sm={6} xs={0} justify="center">
          <Location />
        </Grid>
        <Grid lg={5} md={6} sm={6} xs={12}>
          <Contact />
        </Grid>
        <Grid lg={0} md={0} sm={0} xs={12} justify="center">
          <Location />
        </Grid>
      </Grid.Container>
    </Container>
    </div>
  );
}
