import { showNotification } from '@mantine/notifications';

export function failedDelete(isBeingReferences: string[]){
    showNotification({
        color: "red",
        title: 'Failed to delete',
        message: `You still have the references on ${isBeingReferences.join(", ")}.`,
    })
}

export function failedDeleteMessage(messages: string){
    showNotification({
        color: "red",
        title: 'Failed to delete',
        message: messages,
    })
}

export function commonSuccessActions(){
    showNotification({
        title: 'Success',
        message: `Success to perform the actions.`,
    })
}