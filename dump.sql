--
-- PostgreSQL database dump
--

-- Dumped from database version 12.22
-- Dumped by pg_dump version 12.22

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
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) DEFAULT 'null'::character varying,
    birth_date date,
    age_years integer DEFAULT 0,
    age_months integer DEFAULT 0,
    address text,
    email character varying(100) DEFAULT 'null'::character varying
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users _id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."users _id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."users _id_seq" OWNER TO postgres;

--
-- Name: users _id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."users _id_seq" OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public."users _id_seq"'::regclass);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, birth_date, age_years, age_months, address, email) FROM stdin;
1	rifqi	1988-12-27	36	6	Jalan Pahlawan Rempoa, RT/RW 001/010 , Rempoa, Ciputat Timur	muhammad45rifqi@gmail.com
2	andi	1996-01-01	29	8	jakarta	andi@gmail.com
3	true	1996-01-01	29	8	jakarta	true
\.


--
-- Name: users _id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."users _id_seq"', 3, true);


--
-- Name: users users _pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "users _pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

