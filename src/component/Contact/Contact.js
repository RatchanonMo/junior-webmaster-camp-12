import React from "react";
import { Spacer, Text } from "@nextui-org/react";

export default function Contact() {
  return (
    <div>
      <Text h1>ทำนายชะตากับหมอหมึก</Text>
      <Spacer />
      <Text b weight="normal" className="grey">
        สามารถจองคิวได้ในเว็บหรือ
        <br />
        อีเมล : octopus_fortune@teller.com
        <br />
        โทรศัพท์ : 099 XXXX XXX
        <br />
        และมาที่สำนักที่ <br />
        ชั้น 12 อาคาร JWC ถนนโปรแกรมมิ่ง แขวงเว็บ<br/>
        เขตอินเตอร์เน็ต กรุงเทพ 99999<br/>
        ตามวันเวลาที่นัดไว้<br/>
        <br/>
        จำกัดที่ 10 คิวต่อหนึ่งวัน เปิดทำการ <br/>
        10.00 - 18.30 น. พัก 12.00 - 13.00 <br/>
        เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์และอาทิตย์
      </Text>

    </div>
  );
}
