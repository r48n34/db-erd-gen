import { showNotification } from '@mantine/notifications';

export function failedDelete(){
    showNotification({
        color: "red",
        title: 'Failed to delete',
        message: 'You still have the references on this tables',
    })
}