--
-- PostgreSQL database dump
--

-- Dumped from database version 14.13 (Homebrew)
-- Dumped by pg_dump version 14.13 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: books; Type: TABLE; Schema: public; Owner: tpl522_6
--

CREATE TABLE public.books (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    author character varying(255) NOT NULL,
    format character varying(50) NOT NULL
);


ALTER TABLE public.books OWNER TO tpl522_6;

--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_6
--

CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.books_id_seq OWNER TO tpl522_6;

--
-- Name: books_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_6
--

ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;


--
-- Name: books id; Type: DEFAULT; Schema: public; Owner: tpl522_6
--

ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: tpl522_6
--

COPY public.books (id, title, author, format) FROM stdin;
1	The Tale of Hong Gildong	Unknown	Paperback
2	Pachinko	Min Jin Lee	Paperback
3	Kim Ji-young, Born 1982	Cho Nam-joo	Paperback
4	The Vegetarian	Han Kang	Hardcover
5	The Hen Who Dreamed She Could Fly	Sun-mi Hwang	Hardcover
6	Crying Out for a Towel	Sung J. Woo	Hardcover
7	My Lovely Kim Sam-soon	Ji-eun Lee	Hardcover
8	Please Look After Mom	Shin Kyung-sook	Hardcover
9	Korean Stories for Language Learners	Julie K. H. Lee	Hardcover
10	The Last Days of a Nation	Kim Yeon-soo	Hardcover
\.


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_6
--

SELECT pg_catalog.setval('public.books_id_seq', 10, true);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_6
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

