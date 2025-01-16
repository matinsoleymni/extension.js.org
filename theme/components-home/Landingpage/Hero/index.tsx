import { memo, useCallback } from "react";
import { useNavigate } from "rspress/runtime";
import { useI18n, useI18nUrl } from "../../../i18n";

const Hero = memo(() => {
	const tUrl = useI18nUrl();
	const t = useI18n();

	const navigate = useNavigate();
	const handleClickGetStarted = useCallback(() => {
		navigate(tUrl("/docs/welcome"));
	}, [tUrl, navigate]);

	return (
		<header className="pt-16 pb-8 md:pt-12 md:pb-24 grid lg:grid-cols-2 place-items-center">
			<div className="py-6 md:order-1 hidden md:block w-full">
				<picture className="flex lg:justify-end justify-center w-full">
					<img
						src="https://user-images.githubusercontent.com/4672033/102850460-4d22aa80-43f8-11eb-82db-9efce586f73e.png"
						alt="The green puzzle that represents Extension.js logo"
						loading="eager"
						decoding="async"
					/>
				</picture>
			</div>
			<div>
				<h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
					{t("heroTitle")}
				</h1>
				<p className="text-lg mt-4 text-muted-foreground max-w-xl">
					{t("heroDescription")}
				</p>
				<div className="mt-6 flex flex-col sm:flex-row gap-3">
					<div className="grid h-12 w-full grid-cols-2 items-center justify-center gap-6">
						<button
							className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[--rp-c-brand] text-[--rp-c-bg] shadow hover:[--rp-c-brand]/90 px-4 py-2 h-12"
							type="button"
							onClick={handleClickGetStarted}
						>
							{t("readTheDocs")}
							<div className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="lucide lucide-play ml-2 size-4 fill-[--rp-c-bg] stroke-[--rp-c-bg]"
								>
									<title>Arrow right</title>
									<polygon points="6 3 20 12 6 21 6 3" />
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="lucide lucide-play -ml-1 size-4 fill-[--rp-c-bg] stroke-[--rp-c-bg]"
								>
									<title>Arrow right</title>
									<polygon points="6 3 20 12 6 21 6 3" />
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									className="lucide lucide-play -ml-1 size-4 fill-[--rp-c-bg] stroke-[--rp-c-bg]"
								>
									<title>Arrow right</title>
									<polygon points="6 3 20 12 6 21 6 3" />
								</svg>
							</div>
						</button>
						<a
							href="https://github.com/extension-js/extension.js"
							target="_blank"
							className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent text-accent-foreground hover:text-accent-foreground px-4 py-2 h-12"
							style={{ height: "52px" }}
							rel="noopener noreferrer"
						>
							<svg viewBox="0 0 438.549 438.549" className="mr-3 size-4">
								<title>GitHub icon</title>
								<path
									fill="currentColor"
									d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
								/>
							</svg>{" "}
							{t("starOnGitHub")}
							<span className="ml-2 inline-flex items-center border border-muted rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
								3.7k
							</span>
						</a>
					</div>
				</div>
			</div>
		</header>
	);
});

export default Hero;
