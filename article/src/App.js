import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Blogs from './components/Article/Articles';
import { login, logout } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import AddBlog from './components/Article/AddArticle/AddArticle';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import {
	selectBlogAuthor,
	selectBlogContent,
	selectBlogId,
	selectBlogThumbnailUrl,
	selectBlogTitle
} from './features/articleSlice';

import './App.css';
import BlogDisplay from './components/Article/ArticleDisplay/ArticleDisplay';




function App() {
	const dispatch = useDispatch();

	const blogId = useSelector(selectBlogId);
	const blogTitle = useSelector(selectBlogTitle);
	const blogContent = useSelector(selectBlogContent);
	const blogThumbnailUrl = useSelector(selectBlogThumbnailUrl);
	const blogAuthor = useSelector(selectBlogAuthor);

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch(
					login({
						uid: authUser.uid,
						photo: authUser.photoURL,
						email: authUser.email,
						displayName: authUser.displayName
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, []);

	return (
		<Router>
			
			<div className='app'>
				 <ParticleBackground /> 
				<Header />
				
                <Switch>
					<Route path={`/${blogId}/read`}>
						<BlogDisplay
							id={blogId}
							title={blogTitle}
							content={blogContent}
							thumbnailUrl={blogThumbnailUrl}
							author={blogAuthor}
						/>
					</Route>

					<Route path='/addBlog'>
						<AddBlog />
					</Route>

					<Route exact path='/'>
						<div className='app__page'>
							<Blogs />
						</div>
					</Route>
				</Switch>
			</div>
		</Router>
	);
	}	

export default App;
