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

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export default function ContactFormEmail({
  firstName,
  lastName,
  message,
  serviceInterested,
  phone,
  email,
}) {
  return (
    <Tailwind>
      <Html className="font-sans font-light bg-white">
        <Head />
        <Preview>Contact Form Message</Preview>
        <Body className="mx-auto my-auto font-sans bg-white">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Img
              src={`${baseUrl}/public/ims-logo.png`}
              width="40"
              height="33"
              alt="Industrial Millwright Service"
            />
            <Section>
              <Text className="text-black text-[14px] leading-[24px]">
                Message from {firstName} {lastName}:
              </Text>
              <Section className="bg-[rgb(245, 244, 245)] w-full px-[10px] py-[5px]">
                <Text className="text-black text-[14px] leading-[24px]">
                  {message}
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
              <Text className="text-black text-[14px] leading-[24px]">
                Client contact
                <Text className="font-bold">
                  Phone: {phone} <br /> Email: {email}
                </Text>
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
                        <Img
                          src={`${baseUrl}public/facebook-icon.png`}
                          width="32"
                          height="32"
                          className="inline-block"
                          alt="Facebook"
                        />
                      </Link>
                      <span className="hidden pointer-events-none">
                        <a
                          target="_blank"
                          href="https://icons8.com/icon/8818/facebook"
                        >
                          Facebook
                        </a>
                        icon by{" "}
                        <a target="_blank" href="https://icons8.com">
                          Icons8
                        </a>
                      </span>
                    </Column>
                    <Column>
                      <Link href="/" className="pl-4 text-black">
                        <Img
                          src={`${baseUrl}/public/linkedin-icon.png`}
                          width="32"
                          height="32"
                          className="inline-block"
                          alt="LinkedIn"
                        />
                      </Link>
                      <span className="hidden pointer-events-none">
                        <a
                          target="_blank"
                          href="https://icons8.com/icon/8808/linkedin"
                        >
                          LinkedIn
                        </a>{" "}
                        icon by{" "}
                        <a target="_blank" href="https://icons8.com">
                          Icons8
                        </a>
                      </span>
                    </Column>
                    <Column>
                      <Link href="/" className="pl-4 text-black">
                        <Img
                          src={`${baseUrl}/public/email-icon.png`}
                          width="32"
                          height="32"
                          className="inline-block"
                          alt="Email"
                        />
                      </Link>
                      <span className="hidden pointer-events-none">
                        <a
                          target="_blank"
                          href="https://icons8.com/icon/12623/email"
                        >
                          Email
                        </a>
                        icon by
                        <a target="_blank" href="https://icons8.com">
                          Icons8
                        </a>
                      </span>
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
