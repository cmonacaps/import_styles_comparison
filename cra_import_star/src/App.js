import React from 'react';
import './App.css';

import * as R from 'ramda';

const decorate = R.curryN(3,
  ([object, subject], f, ob) =>
    R.chain(
      R.set(object),
      R.compose(
        f,
        R.view(subject)
      )
    )(ob)
)

const makeTableData =
  (number =>
    (numbers =>
        R.compose(
          R.map(
            R.compose(
              R.omit(['factors']),
              decorate([R.lensProp('product'), R.lensProp('factors')], R.apply(R.multiply)),
              R.chain(
                R.set(R.lensProp('factors')),
                R.juxt([R.view(R.lensProp('x')), R.view(R.lensProp('y'))])
              )
            )
          ),
          R.flatten,
          R.map(([x, ys]) => R.map(R.mergeLeft(x), ys)),
          R.transpose,
          R.over(
            R.lensIndex(1),
            R.flip(R.repeat)(number)
          ),
          R.juxt(
            [R.map(R.objOf('x')),
              R.map(R.objOf('y'))]
          )
        )(numbers)
    )(
      R.times(R.add(1), number)
    ))

const TableData = ({tableData, rowKey, columnKey, cellKey}) =>
  (dataRows => (<table><tbody>{
    R.map(row =>
      (<tr key={R.prop(rowKey, R.head(row))}>
        {R.map(cell =>
          (<td key={`${R.prop(rowKey, cell)},${R.prop(columnKey, cell)}`}>
            {R.prop(cellKey, cell)}
          </td>),
          row
        )}
      </tr>),
      dataRows
    )}
  </tbody></table>))(R.values(R.groupBy(R.prop(rowKey), tableData)))

const App = () =>
  (<div className="App">
    <TableData tableData={makeTableData(20)} rowKey={'x'} columnKey={'y'} cellKey={'product'} />
  </div>)

export default App;
