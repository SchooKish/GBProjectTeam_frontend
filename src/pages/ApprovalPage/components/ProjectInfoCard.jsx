import React from 'react'
import {
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    CardHeader,
    Stack
} from '@mui/material'
import { projectInfo } from '../constants/projectInfo.js'
import { getValue } from '../utils/getValue.js'
import { getColor } from '../utils/getColor.js'

export const ProjectInfoCard = () => {
    const renderAttribute = (attribute, value, agreedTitle, notAgreedTitle, isColored) => (
        <Stack direction='row'>
            <Typography
                sx={{
                    display: 'flex',
                    flexDirection: 'row'
                }}
            >
                {attribute}:&nbsp;
            </Typography>

            <Typography
                fontWeight='fontWeightBold'
                color={isColored ? getColor(value) : 'none'}
            >
                {getValue(value, agreedTitle, notAgreedTitle)}
            </Typography>
        </Stack>
    )

    return (
        <Card sx={{ width: '25%' }}>
            <CardHeader title='Информация о проекте' />

            <CardContent>
                {renderAttribute('Автор проекта', projectInfo.author)}

                {renderAttribute(
                    'Статус проекта',
                    projectInfo.projectIsNotAgreed,
                    'На согласовании',
                    'Закрыт',
                    true
                )}

                {renderAttribute(
                    'Решение',
                    projectInfo.userDecisionIsAgreed,
                    'Согласовано',
                    'Отклонено',
                    true
                )}
            </CardContent>

            <CardActions>
                <Stack spacing={1} alignItems='center' flex={1}>
                    <Button
                        sx={{ borderRadius: 20, minWidth: 250 }}
                        size='small'
                        variant='outlined'
                    >
                        Изменить решение
                    </Button>

                    <Button
                        sx={{ borderRadius: 20, minWidth: 250 }}
                        size='small'
                        variant='outlined'
                    >
                        Изменить статус проекта
                    </Button>
                </Stack>
            </CardActions>
        </Card>
    )
}