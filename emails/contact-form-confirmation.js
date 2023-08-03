import React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { AiFillFacebook, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export default function ContactFormConfirmation({
  firstName,
  lastName,
  serviceInterested,
}) {
  return (
    <Tailwind>
      <Html className="font-sans font-light bg-white">
        <Head />
        <Preview>IMS Contact Form Message</Preview>
        <Body className="mx-auto my-auto font-sans bg-white">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Img
              src={`/ims-logo.jpg`}
              width="40"
              height="33"
              alt="Industrial Millwright Service"
            />
            <Section>
              <Text className="text-black text-[14px] leading-[24px]">
                Automated message from Industrial Millwright Service:
              </Text>
              <Section className="bg-[rgb(245, 244, 245)] w-full px-[10px] py-[5px]">
                <Text className="text-black text-[14px] leading-[24px]">
                  Thank you for contacting Industrial Millwright Service. We'll
                  get back promptly.
                </Text>
              </Section>

              <Text className="text-black text-[14px] leading-[24px]">
                Services client is interested:
                {serviceInterested.map((service, index) => {
                  return (
                    <Text key={index} className="font-bold">
                      {service}
                    </Text>
                  );
                })}
              </Text>
            </Section>
            <Section>
              <Container className="flex justify-between border border-black">
                <Column className="w-[300px]">
                  <Text className="text-xl font-bold">IMS</Text>
                </Column>
                <Column>
                  <Row className="px-[8px]">
                    <Column>
                      <Link href="/" className="text-black ">
                        <AiFillFacebook size={30} />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="/" className="pl-4 text-black">
                        <AiOutlineMail size={30} />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="/" className="pl-4 text-black">
                        <AiFillLinkedin size={30} />
                      </Link>
                    </Column>
                  </Row>
                </Column>
              </Container>
              <Text className="text-black text-[14px] leading-[24px]">
                Industrial Millwright Service - We are here for your project
                needs.
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
