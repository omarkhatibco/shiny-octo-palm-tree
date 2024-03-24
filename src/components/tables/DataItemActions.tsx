import { FC } from 'react'
import Link from 'next/link'
import { DeleteIcon, EditIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Flex, IconButton } from '@chakra-ui/react'

export type DataItemActionsProps = {
  pathPrefix?: string
  id: string
}

export const DataItemActions: FC<DataItemActionsProps> = ({ id, pathPrefix }) => {
  const path = pathPrefix ? `${pathPrefix}/${id}` : ''
  return (
    <Flex gap={4}>
      <IconButton
        as={Link}
        href={`${path}/delete`}
        aria-label='Delete'
        icon={<DeleteIcon />}
      />

      <IconButton
        as={Link}
        href={`${path}/edit`}
        aria-label='Edit'
        icon={<EditIcon />}
      />
      <IconButton
        as={Link}
        href={path}
        aria-label='view'
        icon={<ExternalLinkIcon />}
      />
    </Flex>
  )
}
