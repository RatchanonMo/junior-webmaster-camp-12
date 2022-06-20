import React from "react";
import { Text, Card, Spacer, Container } from "@nextui-org/react";

export default function Profile() {
  return (
    <div>
          <Text h1>ประวัติหมอหมึก</Text>
          <Spacer y={1} />
          <Text h3 weight="normal" className="grey">
            หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวงด้วยลูกแก้วพยากรณ์
            ไพ่ทาโร และการดูลายมือ
          </Text>
          <Text h3 weight="normal" className="grey">
            ด้วยความสามารถที่หลากหลาย ทำให้หมอหมึกสามารถเลือกวิธีการทำนายที่เหมาะกับแต่ละบุคคลเพื่อให้ได้ผลลัพธ์แม่นยำที่สุด
          </Text>

    </div>
  );
}
