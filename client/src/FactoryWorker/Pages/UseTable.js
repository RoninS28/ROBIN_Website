import React, { useState } from 'react'
import { Table, TableHead, TableRow, TableCell, makeStyles, TablePagination, TableSortLabel } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
    },
}))

export default function useTable( headCells,filterFn) {

    const classes = useStyles();

    const TblContainer = props => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )

    const TblHead = props => {       

        return (<TableHead>
             <TableRow>
                {
                    headCells.map(headCell => (
                        <TableCell key={headCell.id}>  
                            {headCell.label}           
                        </TableCell>))
                }
            </TableRow>
           
        </TableHead>)
    }

    

   

   

  
    return {
        TblContainer,
        TblHead}
}