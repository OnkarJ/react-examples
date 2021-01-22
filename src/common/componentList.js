import React from 'react';
import EagerLoading from '../components/Performance/EagerLoading';
import WebpackMagicComment from '../components/Performance/WebpackMagicComment';
import reportProfile from '../components/Profiler/report-profiler';
import CompoundComponent from '../components/Patterns/CompoundComponent';
import { PropsGetters } from '../components/Patterns/PropGetters';
import ReactReducers from '../components/Patterns/ReactReducers';
import ContextFunction from '../components/Patterns/ContextFunction/index';

const list = [
    {
        id: 1,
        component: <EagerLoading />,
        name: 'Eager Loading - Performance'
    }, {
        id: 2,
        component: <WebpackMagicComment />,
        name: 'Webpack magic comments - Performance'
    }, {
        id: 3,
        component: (<React.Profiler id="eager-load" onRender={reportProfile}>
        <EagerLoading />
      </React.Profiler>),
        name: 'Profiler - Performance'
    }, {
        id: 4,
        component: <CompoundComponent />,
        name: 'Compound Components - Pattern'
    }, {
        id: 5,
        component: <PropsGetters />,
        name: 'Prop Getters - Pattern'
    }, {
        id: 6,
        component: <ReactReducers />,
        name: 'Reducers - Pattern'
    }, {
        id: 7,
        component: <ContextFunction />,
        name: 'Context Module Functions - Pattern'
    }
];

export { list };