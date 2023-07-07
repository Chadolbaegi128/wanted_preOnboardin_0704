export const useRouter = () => {
    const push = path => {
        console.log(path);
        window.history.pushState({}, "", path);
        window.EventTarget.dispatchEvent(new PopStateEvent("popstate"));
    }

    return {push};
}