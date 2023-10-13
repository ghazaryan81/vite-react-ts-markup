/*prettier-ignore*/ import { ReactNode,
                             createElement,
                             CSSProperties,
                             FC, ElementType,
                             memo, useEffect, useState,
                             Dispatch, 
                             SetStateAction
                            }                      from 'react';

/*prettier-ignore*/ import styled, 
                           { ThemeProvider,  
                             css,
                             createGlobalStyle }   from "styled-components";

/*prettier-ignore*/ import { Fonts, 
                             GlobalStyle, 
                             vars, 
                             fn,
                             fr }                  from "@/styled";

/*prettier-ignore*/ import { SizesType, 
                             TagVariantsType }     from "@/types/main";

/*prettier-ignore*/ import { ArrowDown, Facebook } from "@/svg/mono";

/*prettier-ignore*/ import { CoreUI, 
                             CoreUIProps, 
                             Div, 
                             SvgSprite }           from "@/components/default";

/*prettier-ignore*/ import { Input, 
                             InputProps, 
                             Button, 
                             ButtonProps,
                             FormRow,
                             FormRowProps,
                             ToolBar, 
                             ToolBarProps,
                             SVGWrap,
                             SVGWrapProps,
                             SVGWrapAttrsProps, 
                             List, 
                             ListIt, 
                             ListProps, 
                             ListItProps }          from '@/components/styled';

/*prettier-ignore*/ import { applyMiddleware, 
                             createStore, 
                             combineReducers }      from "redux";
/*prettier-ignore*/ import { composeWithDevTools }  from "redux-devtools-extension";
/*prettier-ignore*/ import logger                   from 'redux-logger';
/*prettier-ignore*/ import thunkMiddleware          from 'redux-thunk';

/*prettier-ignore*/ import { Provider,
                             useDispatch, 
                             useSelector, 
                             shallowEqual }         from 'react-redux';

/*prettier-ignore*/ import {todoReducer,
                            readAllEntityApi}       from "@/duckTodoRedux";

/*prettier-ignore*/ import { ITodoCat, ITodo }      from "@/types/main";

/*prettier-ignore*/ const rootReducer        = combineReducers({ todo: todoReducer });
/*prettier-ignore*/ const middlewareEnhancer = applyMiddleware(logger, thunkMiddleware);
/*prettier-ignore*/ const store              = createStore(rootReducer, composeWithDevTools(middlewareEnhancer));

const bp = vars["layout-width"];

const Container = styled.div<{ bg: string }>`
  background-color: ${(props) => props.bg};
  height: 50px;
`;

export default function App() {
  const [state, setState] = useState<ITodo>();

  return (
    <Provider store={store}>
      <ThemeProvider theme={vars}>
        <GlobalStyle />
        <Fonts />
        <Container bg="#ff0000" as="p" className="some-p" />
        <ToolBar as="p" className="tool-bar" />
        <List className="list">
          <ListIt className="list-it">cat 1</ListIt>
          <ListIt className="list-it">cat 2</ListIt>
        </List>
        <FormRow className="form-row">
          <Input
            type="text"
            placeholder="input text"
            size="sm"
            className="inp"
          />
          <Button size="sm" className="btn">
            <SVGWrap color="violet-400" opacity="0.5" className="svg-wrap">
              <SvgSprite
                width="15"
                height="15"
                hash="icon-star"
                className="svg"
              />
            </SVGWrap>
            add
          </Button>
        </FormRow>
      </ThemeProvider>
    </Provider>
  );
}
