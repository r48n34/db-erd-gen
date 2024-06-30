import { Box, Card, Container, Group, Text } from "@mantine/core";
import ERTableComp from "../components/ERTableComp";

import { dummySchemeHome } from "./dummyDataTest";
import HomeNavBar from "../components/home/HomeNavBar";
import Footer from "../components/home/Footer";

function HomePage(){
    return (
        <>
        <HomeNavBar />
        <Container fluid>

            <Text fz={48} fw={600} ta="center" mt={48}>
                <Text fz={72} span c="blue" inherit>DB</Text> graphers
            </Text>

            <Text fz={18} fw={300} ta="center" c="dimmed" mt={-8}>
                Open sources, free forever sql scheme design tools
            </Text>

            <Group justify="center" mt={24} >
                <Card shadow="sm" padding="lg" radius="md" withBorder style={{ height: "70vh", width: "80%" }}>    
                    <Text fz={24} fw={300} ta="center">
                        GUI base database tool, create table and export scheme in a few clicks!
                    </Text>
                    
                    <Box style={{ height: "100%", width: "100%" }} mb={48}>
                        <ERTableComp tableArray={dummySchemeHome} />
                    </Box>
                </Card>
            </Group>

        </Container>

        <Footer />
        </>
    )
}
    
export default HomePage
