import React, {createContext, useContext} from 'react';
import { MoviesRepository } from '../features/movies/domain/movie.repository.ts';

interface ContextValue {
    moviesRepository: MoviesRepository
}

const ApplicationContext = createContext<ContextValue>({} as ContextValue);
export const useApplication = (): ContextValue => {
    return useContext(ApplicationContext);
};
interface Props {
    children: React.ReactElement;
    dependencies: {
        moviesRepository: MoviesRepository;
    };
}
export const ApplicationProvider = ({ children, dependencies }: Props) => {
    const { moviesRepository } = dependencies;
    return (
        <ApplicationContext.Provider
            value={{
                moviesRepository,
            }}
        >
            {children}
        </ApplicationContext.Provider>
    );
};
