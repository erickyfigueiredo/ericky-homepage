import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an Full-Stack developer based in Japan!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ericky Figueiredo
          </Heading>
          <p>Full-Stack Developer | Node.js | PHP | Vue.js | ReactJS | AWS</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/photo.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        🌟 In July 2023, I arrived in Japan in pursuit of an international career in a developed country.
        Currently, I&apos;m working outside my field, but I&apos;m actively seeking remote opportunities to get back to doing what I love.
        <br/>
        <br/>
        📌Current visa status: Spouse visa holder.
        <br/>
        🇧🇷 I&apos;m Brazilian
        <br/>
        <br/>
        🚀 I&apos;m a technology enthusiast who chose the path of a Full Stack Developer because I&apos;ve always had a passion for tools that could make people&apos;s lives easier. I&apos;m constantly seeking opportunities to learn and grow. I have a genuine love for teamwork and sharing knowledge with my colleagues.
        <br/>
        <br/>
        🎯 My goal is to contribute to projects that can be used by many people and add value. An interesting fact about me is that, in addition to my programming language affinity, I also have a great love for learning new languages. Currently, I can hold conversations in English, and I&apos;m in the process of building proficiency in Japanese.
        <br/>
        <br/>
        💡 I strongly believe that technology is an incredible tool for connecting people and ideas, and I&apos;m always looking for ways to expand my knowledge and collaborate meaningfully. I&apos;m excited about what the future holds in my career journey.
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2021 ~ 2022</BioYear>
          Full-stack Developer - 
          Gran Cursos Online · Full-time
        </BioSection>
        <br/>
        <BioSection>
          <BioYear>2018 ~ 2021</BioYear>
          Full-stack Developer Junior - 
          Websis · Full-time
        </BioSection>
        <br/>
        <BioSection>
          <BioYear>2018</BioYear>
          Web Development Intern - 
          (CFC) · Internship
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        👨‍💻 Coding enthusiast by day, programmer by night 🌙 <br/> 🎮 Gaming aficionado <br/> 🚀 Exploring the tech universe
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/erickyfigueiredo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @erickyfigueiredo
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/erickyfigueiredo/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @erickyfigueiredo
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
