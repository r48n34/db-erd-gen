import { showNotification } from '@mantine/notifications';

export function failedDelete(isBeingReferences: string[]){
    showNotification({
        color: "red",
        title: 'Failed to delete',
        message: `You still have the references on ${isBeingReferences.join(", ")}.`,
    })
}