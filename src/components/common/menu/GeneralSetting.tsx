import { Container, Space, Switch, Text } from "@mantine/core";
import useSettingStoreStore from "../../../store/settingStore";

function GeneralSetting() {

    const generalSettings = useSettingStoreStore((state) => state.settings);
    const adjustSingleSettingFunc = useSettingStoreStore((state) => state.adjustSingleSetting);

    return (
        <>
            <Container fluid>
                <Text fz={32} fw={600}>
                    General settings
                </Text>

                <Text fz={14} fw={400} c="dimmed" mt={12} mb={12}>
                    Default creating columns with Not Null
                </Text>

                <Switch
                    size="sm"
                    onLabel="ON" offLabel="OFF"
                    checked={generalSettings.defaultToNotNull}
                    onChange={(event) => adjustSingleSettingFunc("defaultToNotNull", event.currentTarget.checked)}
                />

                <Space h="lg" />
            </Container>
        </>
    )
}

export default GeneralSetting
